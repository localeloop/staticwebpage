import { getDeviceType } from "./getDeviceType";

const getFullPath = (partialPath: string, deviceType?: string, isLowQuality: boolean = false) => {
    if (!deviceType) deviceType = getDeviceType();
    const parts = partialPath.split('/');
    const deviceFolder = isLowQuality ? 'lq' : deviceType; // Use 'lq' folder for low-quality images
    parts.splice(1, 0, deviceFolder);
    return `https://qh-store.nyc3.digitaloceanspaces.com/${parts.join('/')}`;
};

export default getFullPath