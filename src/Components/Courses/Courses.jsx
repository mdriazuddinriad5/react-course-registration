import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = ({handleSelect}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('/courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 lg:mb-20">
            {
                courses.map((course, idx) =>
                    <Course
                        course={course}
                        key={idx}
                        handleSelect={handleSelect}
                    ></Course>)
            }
        </div>
    );
};

export default Courses;