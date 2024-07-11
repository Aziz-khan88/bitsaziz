/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'inhouse.cryscampus.com',
                port: '',
                pathname: '/**',
            }
        ]
    },
    async redirects() {
        return [
            {
                source: '/mobile-app-design-company',
                destination: '/top-mobile-app-development-company',
                permanent: true,
            },
        ]
    },
}

export default nextConfig;