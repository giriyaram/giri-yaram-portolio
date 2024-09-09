/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // Disable image optimization
      },
    typescript: {
        ignoreBuildErrors: true,
    }
};

export default nextConfig;
