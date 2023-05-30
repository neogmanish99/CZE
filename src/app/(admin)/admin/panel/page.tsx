import LargeHeading from "@/app/components/ui/LargeHeading";
import Paragraph from "@/app/components/Paragraph";
import { FC } from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Similarity API | Documentation",
    description: "Free & open-source text similarity API",
};

const page: FC = () => {
    return (
        <div className="container max-w-7xl mx-auto mt-12">
            <div className="flex flex-col items-center gap-6">
                <LargeHeading>Panel Admin Protected Page</LargeHeading>
            </div>
        </div>
    );
};

export default page;
