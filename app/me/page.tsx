import SimpleAnimatedList from '@/components/ui/simple-animated-list';

export default function MePage() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <SimpleAnimatedList
                items={[
                    { label: 'github', href: 'https://github.com/hi-aryan' },
                    { label: 'youtube', href: 'https://www.youtube.com/@hi-aryan' },
                    { label: 'twitter', href: 'https://x.com/leo_aryan0' },
                    { label: 'linkedin', href: 'https://www.linkedin.com/in/aryan-leo-begdeli-114889240' },
                ]}
            />
        </div>
    );
}
