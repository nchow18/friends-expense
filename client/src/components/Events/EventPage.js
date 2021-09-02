import React, { useState } from 'react';
import Activities from '../../components/Events/Activities';
import ActivityIdeas from '../../components/Events/ActivityIdeas';
import Itinerary from '../../components/Events/Itinerary';
import Expense from '../../components/Events/Expense';
import Meal from '../../components/Events/Meal';
import MealIdeas from '../../components/Events/MealIdeas';
import Groceries from '../../components/Events/Groceries';
import TotalCost from '../../components/Events/TotalCost';
import SplitCost from '../../components/Events/SplitCost';

function EventPage(props) {

  const {
    currentEvent,
    all_events,
    user_me
  } = props

  console.log(all_events);
  console.log(currentEvent);

  const [activityModal, setActivityModal] = useState(false);
  const [activityIdeasModal, setActivityIdeasModal] = useState(false);
  const [itineraryModal, setItineraryModal] = useState(false);
  const [expenseModal, setExpenseModal] = useState(false);
  const [mealModal, setMealModal] = useState(false);
  const [mealIdeasModal, setMealIdeasModal] = useState(false);
  const [groceriesModal, setGroceriesModal] = useState(false);
  const [totalCostModal, setTotalCostModal] = useState(false);
  const [splitCostModal, setSplitCostModal] = useState(false);

  var event_display = [];

  for (var i = 0; i < all_events.length; i++) {
    if (currentEvent.event_id === all_events[i].event_id) {
      event_display = all_events[i];
    }
  }

  console.log(event_display);
  const activitiesArr = event_display.activities;
  const activityIdeasArr = event_display.activity_ideas;
  const itineraryArr = event_display.itinerary;
  const expenseArr = event_display.expense;
  const mealArr = event_display.meal;
  const mealIdeasArr = event_display.meal_ideas;
  const groceriesArr = event_display.groceriesArr;
  const totalCostArr = event_display.total_cost;
  const splitCostArr = event_display.split_cost;
  const event_id = event_display._id;

  return (
    <div className="event-page">
      <div>
        <span>Event ID - {currentEvent.event_id}</span>
        <div className="event-details">
          <span><b>Event: </b>{event_display.title}</span>
          <span><b>Trip Description: </b>{event_display.notes}</span>
          <span><b>Total Cost: </b>${event_display.total_cost}</span>
        </div>
      </div>
      
      <div>
        <span onClick={() => {setActivityModal(true)}}>Activities</span> 
          {activityModal === true && (
            <i className="fas fa-angle-double-up" onClick={() => {setActivityModal(false)}}></i>
          )}
        <div className={`hidden-modal ${activityModal === true && `modal-active`}`}>
          <Activities 
           activitiesArr={activitiesArr}
           event_id={event_id} />
        </div>
      </div>
      
      <div>
        <span onClick={() => {setActivityIdeasModal(true)}}>Activity Ideas</span>
        {activityIdeasModal === true && (
            <i className="fas fa-angle-double-up" onClick={() => {setActivityIdeasModal(false)}}></i>
          )}
        <div className={`hidden-modal ${activityIdeasModal === true && `modal-active`}`}>
          <ActivityIdeas
            activityIdeasArr={activityIdeasArr}
            event_id={event_id}
            user_me={user_me} />
        </div>
      </div>

      <div>
        <span onClick={() => {setItineraryModal(true)}}>Itinerary</span>
        {itineraryModal === true && (
            <i className="fas fa-angle-double-up" onClick={() => {setItineraryModal(false)}}></i>
          )}
        <div className={`hidden-modal ${itineraryModal === true && `modal-active`}`}>
          <Itinerary
            itineraryArr={itineraryArr}
            event_id={event_id}
            user_me={user_me} />
        </div>
      </div>

      <div>
        <span onClick={() => {setExpenseModal(true)}}>Expense</span>
        {expenseModal === true && (
            <i className="fas fa-angle-double-up" onClick={() => {setExpenseModal(false)}}></i>
          )}
        <div className={`hidden-modal ${expenseModal === true && `modal-active`}`}>
          <Expense
            expenseArr={expenseArr}
            event_id={event_id} />
        </div>
      </div>

      <div>
        <span onClick={() => {setMealModal(true)}}>Meal</span>
        {mealModal === true && (
            <i className="fas fa-angle-double-up" onClick={() => {setMealModal(false)}}></i>
          )}
        <div className={`hidden-modal ${mealModal === true && `modal-active`}`}>
          <Meal
            mealArr={mealArr}
            event_id={event_id} />
        </div>
      </div>

      <div>
        <span onClick={() => {setMealIdeasModal(true)}}>Meal Ideas</span>
        {mealIdeasModal === true && (
            <i className="fas fa-angle-double-up" onClick={() => {setMealIdeasModal(false)}}></i>
          )}
        <div className={`hidden-modal ${mealIdeasModal === true && `modal-active`}`}>
          <MealIdeas
            mealIdeasArr={mealIdeasArr}
            event_id={event_id} />
        </div>
      </div>

      <div>
        <span onClick={() => {setGroceriesModal(true)}}>Groceries</span>
        {groceriesModal === true && (
            <i className="fas fa-angle-double-up" onClick={() => {setGroceriesModal(false)}}></i>
          )}
        <div className={`hidden-modal ${groceriesModal === true && `modal-active`}`}>
          <Groceries
            groceriesArr={groceriesArr}
            event_id={event_id} />
        </div>
      </div>

      <div>
        <span onClick={() => {setTotalCostModal(true)}}>Total Cost</span>
        {totalCostModal === true && (
            <i className="fas fa-angle-double-up" onClick={() => {setTotalCostModal(false)}}></i>
          )}
        <div className={`hidden-modal ${totalCostModal === true && `modal-active`}`}>
          <TotalCost
            totalCostArr={totalCostArr}
            event_id={event_id} />
        </div>
      </div>
      
      <div>
        <span onClick={() => {setSplitCostModal(true)}}>Split Cost</span>
        {splitCostModal === true && (
            <i className="fas fa-angle-double-up" onClick={() => {setSplitCostModal(false)}}></i>
          )}
        <div className={`hidden-modal ${splitCostModal === true && `modal-active`}`}>
          <SplitCost
            splitCostArr={splitCostArr}
            event_id={event_id} />
        </div>
      </div>

    </div>
  )
}

export default EventPage;