# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1. Add custom ID field to Agent table in database

- Acceptance criteria: The agent table in the db should have a new field, called custom_id. This field should be nullable and be used to store the Facility's custom id for an agent
- Time/effort: Small (1-2 hours)
- Implementation details: Add the custom_id field to the agent in the table using an appropriate data type (string/number etc). Make sure to updated migration scripts, documentation and unit tests to accommodate for the change

2. Allow Facilities to set custom ids for the Agents though the platform

- Acceptance criteria: Facilities should be able to set the new custom id for their agents by using the our platform; logging in as admin and visiting the agent's profile page and entering the new custom_id in a new text field.
- Time/effort: Low (1-2 hours)
- Implementation details: Add custom id text field to agent profile page in the platform front end, update the corresponding api to handle the change. Test for edge cases.

3. Create helper function to check if custom_id is existent on the agent profile

- Acceptance criteria: Add a backend helper function to check if custom_id is created, return custom_id if existent, if not return the internal db id as before.
- Time/effort: Low (1-2 hours)
- Implementation details: Modify the backend query in to test for the custom_id field. If the value is null, return the internal id value as before

5. Test and QA custom id functionality

- Acceptance criteria: Users will have the option to add custom_id for their agents. System should be able to handle the new custom_id without interference to service.
- Time/effort: Medium (5-6 hours)
- Implementation details: Write unit-tests and for custom_id in all datatype (string/number) leave filed empty, ensure that users still access to profile page. Generate system reports using getShiftByFacility and generateReports methods that already exist in the system and ensure the custom_id is generate appropriately
