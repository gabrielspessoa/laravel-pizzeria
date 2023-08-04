import {
    faCaretDown,
    faCheck,
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as RadixSelect from "@radix-ui/react-select";
import { useState } from "react";

interface Props extends RadixSelect.SelectProps {
    items: Array<{ id: string; name: string }>;
}

const Select = ({ value, items, onValueChange }: Props) => {
    return (
        <RadixSelect.Root value={value} onValueChange={onValueChange}>
            <RadixSelect.Trigger asChild>
                <div>
                    <button className="relative w-full px-3 py-2 text-sm transition duration-200 border border-gray-300 rounded-md text-start hover:border-yellow-400 focus:border-yellow-500 ring-0 ring-gray-400 focus:ring-2 focus:ring-yellow-500/30 focus:outline-none radix-state-open:border-yellow-500 radix-state-open:ring-2 radix-state-open:ring-yellow-500/30">
                        <RadixSelect.Value placeholder="Selecione um cargo" />
                        <RadixSelect.Icon>
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className="absolute -translate-y-1/2 right-3 top-1/2"
                            />
                        </RadixSelect.Icon>
                    </button>
                </div>
            </RadixSelect.Trigger>

            <RadixSelect.Portal>
                <RadixSelect.Content>
                    <RadixSelect.Viewport className="py-2 bg-white border border-gray-300 rounded-md shadow">
                        {items.map((item) => {
                            return (
                                <RadixSelect.Item
                                    key={item.id}
                                    value={item.id.toString()}
                                    className="relative py-2 pl-8 text-sm cursor-pointer radix-highlighted:bg-gray-100"
                                >
                                    <RadixSelect.ItemText>
                                        {item.name}
                                    </RadixSelect.ItemText>
                                    <RadixSelect.ItemIndicator className="absolute text-gray-500 left-3">
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            size="sm"
                                        />
                                    </RadixSelect.ItemIndicator>
                                </RadixSelect.Item>
                            );
                        })}
                        <RadixSelect.Separator />
                    </RadixSelect.Viewport>
                </RadixSelect.Content>
            </RadixSelect.Portal>
        </RadixSelect.Root>
    );
};

export { Select };
