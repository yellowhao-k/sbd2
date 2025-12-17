import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export interface PostFrontMatter {
  title: string;
  description: string;
  date: string;
  author?: string;
  category?: string;
  tags?: string[];
  image?: string;
  slug: string;
}

export interface ServiceFrontMatter {
  title: string;
  description: string;
  slug: string;
  image?: string;
  features?: string[];
}

export interface CountryFrontMatter {
  title: string;
  description: string;
  slug: string;
  image?: string;
  services?: string[];
}

export function getPosts(): PostFrontMatter[] {
  const blogDir = path.join(contentDirectory, "blog");
  if (!fs.existsSync(blogDir)) return [];
  
  const files = fs.readdirSync(blogDir);
  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(blogDir, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return {
        ...data,
        slug: file.replace(".mdx", ""),
      } as PostFrontMatter;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): { frontMatter: PostFrontMatter; content: string } | null {
  const blogDir = path.join(contentDirectory, "blog");
  const filePath = path.join(blogDir, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) return null;
  
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  
  return {
    frontMatter: {
      ...data,
      slug,
    } as PostFrontMatter,
    content,
  };
}

export function getServices(): ServiceFrontMatter[] {
  const servicesDir = path.join(contentDirectory, "services");
  if (!fs.existsSync(servicesDir)) return [];
  
  const files = fs.readdirSync(servicesDir);
  const services = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(servicesDir, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return {
        ...data,
        slug: file.replace(".mdx", ""),
      } as ServiceFrontMatter;
    });

  return services;
}

export function getServiceBySlug(slug: string): { frontMatter: ServiceFrontMatter; content: string } | null {
  const servicesDir = path.join(contentDirectory, "services");
  const filePath = path.join(servicesDir, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) return null;
  
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  
  return {
    frontMatter: {
      ...data,
      slug,
    } as ServiceFrontMatter,
    content,
  };
}

export function getCountries(): CountryFrontMatter[] {
  const countriesDir = path.join(contentDirectory, "countries");
  if (!fs.existsSync(countriesDir)) return [];
  
  const files = fs.readdirSync(countriesDir);
  const countries = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(countriesDir, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return {
        ...data,
        slug: file.replace(".mdx", ""),
      } as CountryFrontMatter;
    });

  return countries;
}

export function getCountryBySlug(slug: string): { frontMatter: CountryFrontMatter; content: string } | null {
  const countriesDir = path.join(contentDirectory, "countries");
  const filePath = path.join(countriesDir, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) return null;
  
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  
  return {
    frontMatter: {
      ...data,
      slug,
    } as CountryFrontMatter,
    content,
  };
}

