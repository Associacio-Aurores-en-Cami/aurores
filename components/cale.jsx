

"use client";

import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

const Calendar = () => {
  return (
    <Timeline horizontal>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>February 2022</Timeline.Time>
          <Timeline.Title>Plantejem Idea</Timeline.Title>
          <Timeline.Body>
            Get access to over 20+ pages including a dashboard
          </Timeline.Body>
          
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>March 2022</Timeline.Time>
          <Timeline.Title>Aplicacio</Timeline.Title>
          <Timeline.Body>
            AGet access to over 20+ pages including a dashboard
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>April 2022</Timeline.Time>
          <Timeline.Title>Obertura</Timeline.Title>
          <Timeline.Body>
          Get access to over 20+ pages including a dashboard
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}
export default Calendar;