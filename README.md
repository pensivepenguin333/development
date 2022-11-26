# Development

### Link to Deployed Website
`https://pensivepenguin333.github.io/development`

### Goal and Value of the Application
With this web app, a user is able to filter a collection of 12 songs based on 
genre and artist, sort the displayed songs, and "like" the songs they want to 
add to their collection of favorites. The duration of the favorited songs is 
aggregated, and the songs themselves can be viewed by clicking the "View 
Favorites" button. This app essentially can serve as a way to create a playlist
based on the music the user enjoys; furthermore, by keeping track of the total
time of the liked songs, the user can create a "getting ready" or "workout" 
playlist, where the end of a song or playlist is indicative of the completion
of a task.

### Usability Principles Considered
One usability principle considered is consistency with industry standards. For
example, radio buttons are generally used to select one option at a time, 
whereas checkboxes allow for users to select multiple options at a time. Thus, 
in my web app, filtering consists of checkboxes, since users have the ability
of selecting multiple filters at a time. On the other hand, sorting consists of
radio buttons, because it doesn't make sense for the user to choose multiple 
sorting options at a time; only one should be selected at any given time. 
Another aspect considered is user control and freedom, in that users may 
accidentally make certain changes to the app and need a simple way to undo 
everything. Thus, I included a "Reset Filters/Sort" button as a way for users 
to quickly bring the page back to its default state by removing all filters 
and changing the sort method back to "A-Z: Song Name." 

### Organization of Components
There are two main components that make up the `Body` component, which is the 
component that we will use in our final `App`: `Options` and 
`Song`. `Options` is the section that has filtering, sorting, and buttons for 
resetting and viewing favorites. Within the `Options` component, `Filter` and 
`Sort` components are also used to create the various radio buttons/checkboxes 
with the option name next to it. 

### How Data is Passed Down Through Components

### How the User Triggers State Changes
The user can trigger state changes in many different ways. For example, if the
user selects or unselects a checkbox, the displayed songs get updated 
accordingly. If the user selects a different radio button, the displayed songs
get sorted according to the selected option. If the user selects the "View
Favorites" button, the only songs that are displayed are the ones that the user 
has liked. Once the user is viewing the favorite songs, the button becomes a 
"Browse Songs" button that allows the user to return to the state of viewing 
all available songs. The "Reset Filters/Sort" button unselects all filter 
checkboxes and changes the sort radio button back to the default "A-Z: Song 
Name." The final way in which the user can trigger state changes is by pressing
the heart on each song card. This heart, when clicked on, adds the song to 
the favorites list. Clicking on the heart for a second time will remove the 
song from the favorites list. As songs are added and removed from the 
favorites, the displayed duration of the favorited songs also gets updated.
