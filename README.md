## Welcome!
I present to you my REST API App that uses outer Data Base and fake informations, if those informations are missing, such as images of posts and avatars. Those images are used only for clearer reading purpose. Also I would like to give you a hint to see how every component works after its rendering, because USERS are rendered directly in one component, but POSTS are rendered through component, called POST, that is nested. TODOS are rendered through REACT-VIRTUALIZED to minimize time needed to render these todos. Only by scrolling, rest of data is rendered on the go.

## Comments
Comments are in those components where needed to know how it works

## Powered by Faker

I have implemented Faker tool, in order to make better POST cards.
Because of that, I needed to slightly change the code. Otherwise, rendered cards would render images that could keep changing within splits of seconds. 

I am telling you this, dear viewer, to asure you that I know what I am doing. Components never should be rendered and rendered again every second, because it is expensive.