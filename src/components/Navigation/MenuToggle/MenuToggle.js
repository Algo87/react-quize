import React from "react";
import classes from "./MenuToggle.css";

const MenuToggle = (props) => {
    console.log(props);
    const clsWrap = [
        classes.MenuToggle,

    ];
    const cls=[
        "fa"
    ];

    if (props.isOpen) {
        cls.push('fa-times');
        clsWrap.push(classes.open);
    } else {
        cls.push('fa-bars');
    }
    return (
        <div
             onClick={props.onToggle}
             className={clsWrap.join(' ')}
        >
            <i
                className={cls.join(' ')}

            />
        </div>
    )
}

export default MenuToggle