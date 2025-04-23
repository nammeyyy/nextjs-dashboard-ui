/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
const nextConfig = {
    images: {
        domains: ['images.unsplash.com'],
    },
};

export default withNextIntl(nextConfig);
