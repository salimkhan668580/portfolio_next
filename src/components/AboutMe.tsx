'use client'
import {
    Card,
    CardTitle,
    CardHeader,
    CardContent
} from "@/components/ui/card";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import useMediaQuery from "@/hook/useMediaQuery";


export const AboutMe = () => {
    const isDesktopOrLaptop  = useMediaQuery("(min-width: 1224px)");
    return (    

    <Card className="mb-6">
        <CardHeader className="flex flex-row justify-between items-baseline">
            <CardTitle>About Me</CardTitle>
            {isDesktopOrLaptop && <ThemeSwitcher />}
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">
                {/* Write 1-2 sentences about yourself */}
                I am a dedicated web developer specializing in the MERN stack, with a strong focus on building dynamic and responsive web applications. My passion lies in creating seamless user experiences and efficient backend systems using modern frameworks and technologies.
            </p>
        </CardContent>
    </Card>
    )
}