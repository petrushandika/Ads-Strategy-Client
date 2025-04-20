import type { NextConfig } from "next";
import type { RuleSetRule } from "webpack";

const nextConfig: NextConfig = {
  output: "export",
  pageExtensions: ["tsx", "ts", "jsx", "js"],
  images: {
    unoptimized: true,
    domains: ["img.freepik.com"],
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule: RuleSetRule | string): rule is RuleSetRule => {
        return (
          typeof rule !== "string" &&
          rule.test instanceof RegExp &&
          rule.test.test(".svg")
        );
      }
    );

    if (fileLoaderRule) {
      config.module.rules.push(
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: { not: [/url/] },
          use: {
            loader: "@svgr/webpack",
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: "preset-default",
                    params: {
                      overrides: {
                        removeViewBox: false,
                      },
                    },
                  },
                ],
              },
            },
          },
        }
      );

      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },
};

export default nextConfig;
