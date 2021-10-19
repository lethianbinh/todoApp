import React, { useEffect } from "react";
import{
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSelector } from "react-redux";

function Timeline(props){
    const todos = useSelector((state) => state.todoReducer.todos);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Timeline";
    }, []);

    return(
        <div 
            className="App"
            style={{ background: "#333", fontFamily: "Trebuchet Ms" }}
        >
            <h1 className="title-timeline">Timeline</h1>
            <VerticalTimeline>
                {todos.map(todo => (
                    <VerticalTimelineElement
                        className="vertical-timeline-elemeny--work"
                        date={todo.date}
                        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    >
                        <h3 className="vertical-timeline-element-title">{todo.name}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{todo.time}</h4>
                        {todo.complete ? (
                            <p className="vertical-timeline-element-desc success">
                                Đã hoàn thành
                            </p>
                        ) : (
                            <p className="vertical-timeline-element-desc">
                                Chưa hoàn thành
                            </p>
                        )}
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
}

export default Timeline;