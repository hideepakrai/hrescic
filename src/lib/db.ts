import { MongoClient } from "mongodb";

let cachedClient: { conn: MongoClient | null; promise: Promise<MongoClient> | null } = (global as any).mongoClient;

if (!cachedClient) {
  cachedClient = (global as any).mongoClient = { conn: null, promise: null };
}

function getConfig() {
  const MONGODB_URI = process.env.MONGODB_URI;
  const TENANT_DB_NAME = process.env.TENANT_DB_NAME;
  return { MONGODB_URI, TENANT_DB_NAME };
}

export async function connectClient(): Promise<MongoClient> {
  const { MONGODB_URI, TENANT_DB_NAME } = getConfig();

  if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env");
  }
  if (!TENANT_DB_NAME) {
    throw new Error("Please define the TENANT_DB_NAME environment variable inside .env");
  }

  if (cachedClient.conn) return cachedClient.conn;

  if (!cachedClient.promise) {
    cachedClient.promise = MongoClient.connect(MONGODB_URI);
  }

  try {
    cachedClient.conn = await cachedClient.promise;
  } catch (e) {
    cachedClient.promise = null;
    throw e;
  }

  return cachedClient.conn;
}

export async function connectMasterDB() {
  const client = await connectClient();
  return client.db("kalp_master");
}

export async function connectTenantDB() {
  const client = await connectClient();
  return client.db(process.env.TENANT_DB_NAME || "hrescic_tenant");
}
