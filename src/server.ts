import express, { Request, Response } from "express";
import testRoutes from "./routes/testRoutes";
import "./services/ordersSubscriber"; //importing subscriber-functions
import "./services/campaignSubscriber";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhookHandler from "./services/clerkWebhookHandler";

const app = express();
const port = 5000;
// Middleware to parse JSON bodies
app.use(express.json());
// https://clerk.com/docs/upgrade-guides/node-to-express
app.use(clerkMiddleware());
// {backendUrl}/api/webhooks is the webhook endpoint
app.post("/api/webhooks", async (req: Request, res: Response) => {
  await clerkWebhookHandler(req, res);
});
// Start the Redis subscription for new orders
// Simple test route for checking server
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.use("/api", testRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
