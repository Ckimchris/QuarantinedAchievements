import React from "react";

const Tag = ({data}) => {
    return (
        <div style={{overflow: "hidden"}}>
            <div className="input-tag">
                <ul className="input-tag__tags">
                    { data.tags.map((tag, i) => (
                        <li key={tag}>
                            {tag}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="date-tag">
                <ul className="date-tag__tags">
                    <li style={{color: data.color}}><b>{data.date}</b></li>
                </ul>
            </div>
        </div>
    );
}

export default Tag;