import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

export default function ComponentProperties() {
    return (
        <>
            <div>Component Properties</div>

            <div className="grid grid-cols-3">
                {MEMBERS.map((item, index) => (
                    <Profile key={index} info={item} />
                ))}
            </div>
        </>
    );
}

type ProfileInfo = {
    name: string;
    phone: string;
    email?: string;
};

const MEMBERS: ProfileInfo[] = [
    { name: "Htin", phone: "010-0000-0000", email: "lM5t4@example.com" },
    { name: "Phyo", phone: "010-0000-0000", email: "lM5t4@example.com" },
    { name: "Zaw", phone: "010-0000-0000", email: "lM5t4@example.com" },
    { name: "Myo", phone: "010-0000-0000" },
];
function Profile({ info }: { info: ProfileInfo }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-center">{info.name}</CardTitle>
                <CardContent>
                    <div className="flex items-center gap-2">
                        <Phone size={16}></Phone>
                        {info.phone}
                    </div>
                    {
                        info.email && (
                            <div className="flex items-center gap-2">
                                <Mail size={16}></Mail>
                                {info.email}
                            </div>
                        )
                    }
                </CardContent>
            </CardHeader>
            <CardFooter>Footer Card</CardFooter>
        </Card>
    );
}
