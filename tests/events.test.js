
/**
 * @jest-environment node
 */

const funcs = require('./eventFunctions');

test('First event remaining places should equal 12', async () => {
    const response =  await funcs.getEvents()
    expect(response.data.data[0].remaining_places).toBe(122)
});
test('Creating an event test',async ()=>{
  const result = await funcs.createEvent()
  const request={
        remaining_places: 250,
        location: "5c9bff7f569b9a001796d40a",
        about: "MERN Programming Style",
        price: 55,
        speakers: ["Absalam", "Bill Gates"],
        topics: ["Python", "Java"],
        type: "Computer Engineering",
        partnerInitiated: "5c93cd1f1c9fe35274d2f624",
        request:"5c93cd1f1c9fe35274d2f624",
        attendees: ["5c93cd1f1c9fe35274d2f624","5c93cd1f1c9fe35274d2f624"]
  }
  expect(result).toBeDefined()
  expect(result.remaining_places).toEqual(request.remaining_places)
  expect(result.location).toEqual(request.location)
  expect(result.about).toEqual(request.about)
  expect(result.price).toEqual(request.price)
  expect(result.speakers).toEqual(request.speakers)
  expect(result.topics).toEqual(request.topics)
  expect(result.type).toEqual(request.type)
  expect(result.partnerInitiated).toEqual(request.partnerInitiated)
  expect(result.request).toEqual(request.request)
  expect(result.attendees).toEqual(request.attendees)
})


test('Updating an event in the database', async() => {
  const remaining_places = 122
  const response = await funcs.updateEvent('5c9e33e5559ed00017ece5ea',remaining_places)
  expect(response.remaining_places).toEqual(remaining_places)
});

test('gets events by type' , async()=>{
  //const type= "eh feih eh"
  const req={
    type:"eh feih eh"
}
  const response= await funcs.geteventbytype(req.type)
  //console.log(response.data.data)
  expect(response[0].type).toEqual(req.type)
})
test('Creating a new feedback in the feedbacks array', async() =>{
  const allEvents= await funcs.getEvents();
  // console.log(allEvents.data.data[2]._id)
  const response = await funcs.addNewFeedback(allEvents.data.data[2]._id);
  // console.log(response.data.data)
  expect(allEvents.data.data[2].feedbacks.length).toEqual(response.data.data.feedbacks.length);
})


test("Deletes an event",async()=>{
  const result = await funcs.deleteEvent()
  
  expect(result.data.data).toBe(null)
})

test('Creating a new application in the applications array', async() =>{
  const allEvents= await funcs.getEvents();
  const response = await funcs.addNewApplication("5c93b78f1d4b8e5b48557ba0","5c9e33e5559ed00017ece5ea",true);
  expect(allEvents.data.data[0].applicants.length).toEqual(response.data.data.applicants.length);
})