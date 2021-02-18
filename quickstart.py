from __future__ import print_function

import configparser
import datetime
import pickle
import os.path
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request


# If modifying these scopes, delete the file token.pickle.
SCOPES = ['https://www.googleapis.com/auth/calendar',
          'https://www.googleapis.com/auth/calendar.events']


def main():
    """Shows basic usage of the Google Calendar API.
    Prints the start and name of the next 10 events on the user's calendar.
    """
    creds = None
    # The file token.pickle stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists('token.pickle'):
        with open('token.pickle', 'rb') as token:
            creds = pickle.load(token)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open('token.pickle', 'wb') as token:
            pickle.dump(creds, token)

    return build('calendar', 'v3', credentials=creds)

    # insert_event = {
    #         'summary': 'Test Google Calendar',
    #         'location': '800 Howard St., San Francisco, CA 94103',
    #         'description': 'A chance to hear more about Google\'s developer products.',
    #         'start': {
    #             'dateTime': '2021-02-28T09:00:00+08:00',
    #             'timeZone': 'Asia/Taipei',
    #         },
    #         'end': {
    #             'dateTime': '2021-02-28T14:00:00+08:00',
    #             'timeZone': 'Asia/Taipei',
    #         },
    #         'recurrence': [
    #             'RRULE:FREQ=DAILY;COUNT=2'
    #         ],
    #         'attendees': [
    #             {'email': 'zoe19910712@gmail.com'},
    #             {'email': 'sbrin@example.com'},
    #         ],
    #         'reminders': {
    #             'useDefault': False,
    #             'overrides': [
    #                 {'method': 'email', 'minutes': 24 * 60},
    #                 {'method': 'popup', 'minutes': 10},
    #             ],
    #         },
    #     }
    #
    # insert_event = service.events().insert(calendarId='primary', body=insert_event).execute()
    # print('Event created: %s' % (insert_event.get('htmlLink')))

    # calendar_list_entry = service.calendarList().get(calendarId='').execute()
    # print(calendar_list_entry)
    #
    # calendar = service.calendars().get(calendarId='eddiec0425@gmail.com').execute()
    # print(calendar)
    #
    # event = service.events().get(calendarId='eddiec0425@gmail.com', eventId='').execute()
    # print(event)


def get_event():
    # Call the Calendar API
    now = datetime.datetime.utcnow().isoformat() + 'Z'  # 'Z' indicates UTC time
    print('Getting the upcoming 10 events')
    events_result = main().events().list(calendarId='eddiec0425@gmail.com', timeMin=now,
                                          maxResults=10, singleEvents=True,
                                          orderBy='startTime').execute()
    events = events_result.get('items', [])
    print(events)

    if not events:
        print('No upcoming events found.')
    for event in events:
        start = event['start'].get('dateTime', event['start'].get('date'))
        end = event['end'].get('dateTime', event['end'].get('date'))
        print(start, end, event['summary'])
    return events


if __name__ == '__main__':
    main()
