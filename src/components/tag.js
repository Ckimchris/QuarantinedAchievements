import React from "react";

const Tag = ({data}) => {
    return (
        <div className="input-tag">
            <ul className="input-tag__tags">
                { data.tags.map((tag, i) => (
                    <li key={tag}>
                        {tag}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tag;