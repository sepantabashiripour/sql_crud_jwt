import jwt from "jsonwebtoken";

function getJwtSecret(): string {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET is not defined");
  }

  return secret;
}

export type JwtPayload = {
  userId: number;
  email: string;
};

export function createToken(payload: JwtPayload): string {
  const secret = getJwtSecret();

  return jwt.sign(payload, secret, {
    expiresIn: "7d",
  });
}

export function verifyToken(token: string): JwtPayload {
  const secret = getJwtSecret();

  const decoded = jwt.verify(token, secret);

  if (typeof decoded === "string") {
    throw new Error("Invalid token");
  }

  return {
    userId: decoded.userId as number,
    email: decoded.email as string,
  };
}