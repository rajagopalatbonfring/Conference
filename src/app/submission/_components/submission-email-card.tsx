"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

export default function SubmissionEmailCard() {
    const { toast } = useToast();
    const email = "submissions@icleas.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        toast({
            title: "Email Copied",
            description: `${email} has been copied to your clipboard.`,
        });
    };

    return (
        <Card className="max-w-md mx-auto mt-8 bg-card/50 border-border/50">
            <CardHeader>
                <CardTitle>Submit via Email</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-lg font-mono text-primary">{email}</p>
                <Button className="mt-4" onClick={handleCopy}>
                   <Mail className="mr-2 h-4 w-4" /> Copy Email
                </Button>
            </CardContent>
        </Card>
    );
}
