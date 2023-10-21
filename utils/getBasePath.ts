import config from "next/config";
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const { publicRuntimeConfig } = config();
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
const basePath = publicRuntimeConfig.basePath as string;
export { basePath };
