import { MeGrid } from "@/components/me/me-page-grid";

export default function MePage() {
    return (
        <div className="flex min-h-[80vh] flex-col items-center justify-center p-4 gap-8">
            <div className="max-w-2xl text-center text-muted-foreground space-y-4">
                <p>
                    i like building, reading, writing, video editing, and gym/running. i believe modern humans consume too much and produce too little. i’m trying to reverse that for myself.
                </p>
                <p>
                    creating, whether it be content, web apps, workout plan for a friend, or a blogpost has been my highest calling lately. preferably something that helps people live more fulfilled lives.
                </p>
                <p>
                    (my daily journal is currently private.)
                </p>
            </div>
            <MeGrid />
        </div>
    );
}
