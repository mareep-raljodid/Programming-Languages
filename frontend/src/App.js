import logo from './logo.svg';
import './App.css';

const CircleIcon = (props) => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

const Guide = (props) => {
  return(
    <div class={`flex shadow-lg h-64 w-64 mr-4 ${props.colorClass} flex-col`}>
      <div class="pt-2 px-2 text-md font-semibold text-gray-600">
        <a href={props.articleUrl} class="hover:underline">{props.title}</a>
        <hr class="border-gray-400 h-0 border-1"/>
      </div>
      <div class="p-4">
        <img src={props.imgSrc} class="shadow-md"/>
      </div>
    </div>
  )
}

const Reminder = (props) => {
  return(
    <div class="flex flex-col mt-8">
      <div class={`flex shadow-lg rounded-full ${props.colorClass} h-16 max-w-full items-center justify-between`}>
        <div class="flex flex-1">
          <div class="ml-8 w-6 text-gray-600">
            <CircleIcon/>
          </div>
          <div class="ml-8 w-48">
            {props.text}
          </div>
          <div class="text-gray-600 w-24">
            {props.dateString}
          </div>
        </div>
        <div class="flex-1 mr-8 text-sm text-gray-600 text-right">
          {props.recursString}
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      {/* header */}
      <div class="bg-white-400 shadow-sm">
        <div class="container mx-auto">
          <div class="flex py-2">
            <div class="flex flex-1 items-center">
              <div class="font-bold text-3xl text-gray-800">
                Adulting
              </div>
            </div>
            <div class="flex flex-1 items-center justify-between">
              <a class="font-medium text-lg text-gray-600 hover:text-gray-500 transition ease-in-out duration-200" href="/guides">
                Guides
              </a>
              <a class="font-medium text-lg text-gray-600 hover:text-gray-500 transition ease-in-out duration-200" href="/reminders">
                Reminders
              </a>
              <a class="font-medium text-lg text-gray-600 hover:text-gray-500 transition ease-in-out duration-200" href="/reminders">
                Errands
              </a>
              <a class="font-medium text-lg text-orange-500 hover:text-gray-500 transition ease-in-out duration-200" href="/reminders">
                Kidz Corner
              </a>
              {/* <a class="font-medium text-sm text-gray-600 hover:text-gray-500 transition ease-in-out duration-200" href="/reminders">
                Login
              </a> */}
            </div>
          </div>
          <hr class="bg-gray-200 h-px border-none w-screen absolute left-0"/>
        </div>
      </div>
      {/* content */}
      <div class="container mx-auto">

        <div class="text-xl text-gray-800 mt-8">
          Featured Guides
        </div>
        <hr class="border-gray-200 h-0 border-1"/>
        <div class="flex mt-8">
          <Guide
            colorClass='bg-blue-200'
            title='How to manage college life'
            articleUrl='https://www.wikihow.com/Manage-College-Life'
            imgSrc='https://www.wikihow.com/images/thumb/1/14/Manage-College-Life-Step-4.jpg/aid5149802-v4-728px-Manage-College-Life-Step-4.jpg'/>
          <Guide
            colorClass='bg-green-200'
            title='How to Do Your Laundry in a Dorm'
            articleUrl='https://www.wikihow.com/Do-Your-Laundry-in-a-Dorm'
            imgSrc='https://www.wikihow.com/images/thumb/5/58/Do-Your-Laundry-in-a-Dorm-Step-2-Version-3.jpg/aid9689-v4-728px-Do-Your-Laundry-in-a-Dorm-Step-2-Version-3.jpg'/>
          <Guide
            colorClass='bg-purple-200'
            title='How to Change a Tire'
            articleUrl='https://www.wikihow.com/Change-a-Tire'
            imgSrc='https://www.wikihow.com/images/4/4d/Drive-a-Short-Distance-on-a-Flat-Tire-Step-9.jpg'/>
        </div>

        <div class="text-xl text-gray-800 mt-8">
          Upcoming Reminders
        </div>
        <hr class="border-gray-200 h-0 border-1"/>
        <Reminder
          colorClass='bg-blue-200'
          text='Change bedsheets'
          dateString='Dec 8th'
          recursString='Recurs biweekly'/>
        <Reminder
          colorClass='bg-green-200'
          text='Clean out fridge'
          dateString='Dec 15th'
          recursString='Recurs monthly'/>
        <hr class="border-gray-200 h-0 border-1 mt-8"/>
        <div class="text-sm text-gray-800 mt-2">Ohioan Adulting Inc. © 2020</div>
        <div class="flex flex-col">
          <a class="text-sm text-gray-800 hover:underline pt-2">About us</a>
          <a class="text-sm text-gray-800 hover:underline pt-2">Careers</a>
        </div>
      </div>
    </div>
  );
}

export default App;
