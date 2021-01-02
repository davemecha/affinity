import { dayjs } from "../config/Consts";

export const since = (dt: any) => dayjs(dt).fromNow()
export const until = (dt: any) => dayjs(dt).fromNow()
export const hasPassed = (dt: any) => dayjs(dt) < dayjs()