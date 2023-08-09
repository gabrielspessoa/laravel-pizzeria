import * as RadixTooltip from "@radix-ui/react-tooltip";

interface Props {
    children: React.ReactNode;
    text: string;
}

export const Tooltip = ({ children, text }: Props) => {
    return (
        <RadixTooltip.Provider>
            <RadixTooltip.Root delayDuration={0}>
                <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
                <RadixTooltip.Portal>
                    <RadixTooltip.Content
                        side="right"
                        sideOffset={6}
                        className="px-3 py-1 text-sm text-white bg-gray-700 rounded"
                    >
                        {text}
                        <RadixTooltip.Arrow className="fill-gray-700" />
                    </RadixTooltip.Content>
                </RadixTooltip.Portal>
            </RadixTooltip.Root>
        </RadixTooltip.Provider>
    );
};
