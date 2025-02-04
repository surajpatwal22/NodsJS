const { z } = require('zod');

const portSchema = z.coerce.number().int().min(1).max(65535).positive().default(3000);

export const PORT = portSchema.parse(process.env.PORT);