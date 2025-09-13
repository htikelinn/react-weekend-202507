import { Fragment } from "react";

export default function Home() {
    const subject = ["React", "Vue", "Angular"];
    return (
        <div className="container">
            <h1 className="title text-3xl text-center">Home</h1>
            <p>This is my first React component.</p>

            <ul className="list">
                {subject.map((item, index) => (
                  <Fragment key={index}>
                    <li>Subject: {item}</li>
                    {/* <p>Index: {index}</p> */}
                  </Fragment>
                ))}
            </ul>
        </div>
    );
}
