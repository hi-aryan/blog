import { MeGrid } from "@/components/me/me-page-grid";

export default function MePage() {
    return (
        <div className="flex min-h-[80vh] flex-col items-center justify-center p-4 gap-8">
            <div className="group relative flex flex-col justify-end overflow-hidden rounded-xl bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:bg-background transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)] max-w-2xl text-center text-muted-foreground space-y-4 p-8">
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
