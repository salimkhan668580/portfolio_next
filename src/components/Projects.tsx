import Link from "next/link";
import { cn } from "@/lib/utils";

import { ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export const projects = [
    {
        title: "E-commerce Platform",
        description: "Built an e-commerce platform using Integrated React.js, Bootstrap, Node.js, and Express.js .Integrated Google Firebase for login and register functionality, Razorpay for payment gateway",
        tech: "MERN",
        link: "https://fashionshopsalim.netlify.app/",
    },
    {
        title: "Venue Booking System",
        description: "Developed a full-stack web application with user, admin, and super admin panels .Implement authentication, authorization, and Razorpay integration for payment gateway Technologies: HTML, CSS, JavaScript, Bootstrap, Node.js, Express.js, MongoDB, EJS ",
        tech: "EJS,Express.js MongoDB",
        link: "https://elegantbooking.onrender.com/",
    },
    {
        title: "Chat Application",
        description: "An interactive Chat application using React, Socket.io, Mongodb,Express.js . login functionality, user profile, and real-time chat functionality",
        tech: "MERN Socket.io",
        link: "https://salimchat.netlify.app/",
    },
    {
        title: "URL Shortening Website",
        description: "Developed a platform that allows users to generate short, shareable links.Built with Next.js for fast rendering and efficient URL management.Implemented a user-friendly interface for seamless link creation",
        tech: "Next.js",
        link: "https://shortbysalim.netlify.app/",
    },
]

const techColors = {
    "MERN": "bg-blue-500",
    "javascript": "bg-yellow-500",
    "EJS,Express.js MongoDB": "bg-pink-500",
    "MERN Socket.io": "bg-green-500",
    "Express.js": "bg-purple-500",
 
    "Next.js": "bg-black",

}

export const Projects = () => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {projects.map((p, i) => (
                    <Card key={i}>
                        <CardContent className="pt-6 h-full">
                            <div className="flex flex-col h-full">
                                <Link
                                    href={p.link}
                                    className="font-semibold text-primary hover:underline"
                                >
                                    {p.title}
                                </Link>
                                <p className="text-sm text-muted-foreground mt-1 mb-4">
                                    {p.description}
                                </p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div
                                            className={cn(
                                                "size-4 rounded-full",
                                                techColors[p.tech as keyof typeof techColors]
                                            )}
                                        />
                                        <span className="text-xs font-medium text-muted-foreground">
                                            {p.tech}
                                        </span>
                                    </div>
                                    <Link
                                        href={p.link}
                                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                                    >
                                        View Project
                                        <ExternalLink className="inline-block size-3" />
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}