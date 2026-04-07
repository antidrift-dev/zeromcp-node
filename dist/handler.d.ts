/**
 * ZeroMCP HTTP handler — framework-agnostic JSON-RPC handler.
 *
 * Usage:
 *   const handler = await createHandler('./tools');
 *   const response = await handler(jsonRpcRequest);
 *
 * Works with any HTTP framework:
 *   app.post('/mcp', async (req, res) => res.json(await handler(req.body)));
 */
import { type Config } from './config.js';
interface JsonRpcRequest {
    jsonrpc: string;
    id?: number | string;
    method: string;
    params?: Record<string, unknown>;
}
interface JsonRpcResponse {
    jsonrpc: string;
    id?: number | string;
    result?: unknown;
    error?: {
        code: number;
        message: string;
    };
}
export type McpHandler = (request: JsonRpcRequest) => Promise<JsonRpcResponse | null>;
/**
 * Create a ZeroMCP handler from a tools directory or config.
 *
 * @param toolsOrConfig - Path to tools directory, config object, or config file path
 * @returns A function that handles JSON-RPC requests
 */
export declare function createHandler(toolsOrConfig?: string | Config): Promise<McpHandler>;
export {};
//# sourceMappingURL=handler.d.ts.map