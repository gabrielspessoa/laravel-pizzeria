import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Test() {
    const [list, setList] = useState([
        { id: 1, text: "Item 1" },
        { id: 2, text: "Item 2" },
        { id: 3, text: "Item 3" },
        { id: 4, text: "Item 4" },
    ]);
    return (
        <div className="flex max-w-[30px] flex-wrap gap-2">
            {/* <AnimatePresence> */}
            {list.map((item) => (
                <motion.div
                    key={item.id}
                    layout
                    className="flex gap-2 p-3 transition-all bg-white rounded-md shadow w-fit"
                >
                    {item.text}
                    <button
                        onClick={() =>
                            setList((prev) =>
                                prev.filter(
                                    (filterItem) => filterItem.id !== item.id
                                )
                            )
                        }
                    >
                        <FontAwesomeIcon icon={faX} />
                    </button>
                </motion.div>
            ))}
            {/* </AnimatePresence> */}
        </div>
    );
}
