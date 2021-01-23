# Work Day Scheduler

Is an app for setting your work day schedule.  
Work Day Scheduler has been created for an employee with a busy schedule and designed around their criteria. 
## User Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

# Usage
If you'd like a more organized day visit: [Work-Day-Scheduler](https://iitoneloc.github.io/work-planner/)  
Simply select the time slot you would like to edit, enter your event details, and click on save.  
Time blocks are color coded to present a visual representation of where you are in your day.
- Gray indicates a past time slot.
- Red represents the current time.
- Green shows future time slots. 

# Technology Stack
| Technology | Description                        | Links |
| ---------- | -----------------------------------| ------|
|![GitHub top language](https://img.shields.io/github/languages/top/iiTONELOC/work-planner?style=plastic) | javascript |[jQuery localStorage](https://stackoverflow.com/questions/40791207/setting-and-getting-localstorage-with-jquery), [jQuery](https://jquery.com/), [Moment.js](https://momentjs.com/), [Moments Cheat Sheet](https://devhints.io/moment)|
|![CSS](https://img.shields.io/badge/CSS-10.8%25-rebeccapurple)| Cascading Style Sheets | [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)                                      |
|![HTML](https://img.shields.io/badge/HTML-41.6%25-orange)| Hyper Text MarkUp Language |

# License
MIT License

Copyright (c) 2021 Anthony Tropeano

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
