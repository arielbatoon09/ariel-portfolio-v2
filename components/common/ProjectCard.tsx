import Link from "next/link";
import Image from "next/image";
import Markdown from "react-markdown";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CardProps {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard(props: CardProps) {
  const { title, href, description, dates, tags, link, image, video, links, className } = props;
  return (
    <Card className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full !pt-0 pb-1 !gap-0">
      <Link href={href || "#"} className={cn(
        "block cursor-pointer",
        className
      )}>
        {video && (
          <video src={video} autoPlay loop muted playsInline
          className="pointer-events-none mx-auto h-40 w-full object-cover object-top" />
        )}
        {image && (
          <Image src={image} alt={title} height={300} className="h-40 w-full overflow-hidden object-cover object-top" />
        )}
      </Link>

      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="text-lg py-2">{title}</CardTitle>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            <Markdown>
              {description}
            </Markdown>
          </div>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge key={tag} variant="secondary" className="px-2 py-1 text-[10px] hover:bg-black/10 transition-all duration-300 cursor-arrow">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2 pt-4">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, index) => (
              <Link href={link?.href} key={index} target="_blank" className="no-underline">
                <Badge key={index} className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link> 
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}