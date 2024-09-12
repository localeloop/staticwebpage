export const getDeviceType = () => {
    const width = window.innerWidth;

    if ( width <= 768 ) return 'phones';
    if ( width <= 1024 ) return 'tablet';
    return 'desktop'
}