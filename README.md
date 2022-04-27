# Welcome to Test-Monkey!
Links:
- [Meet the Team](https://github.com/maceyraejones/test-monkey/wiki) 
- [Product Proposal](https://github.com/maceyraejones/test-monkey/wiki/Product-Proposal) 
- [Product Backlog](https://github.com/maceyraejones/test-monkey/projects/1) 
- [All Sprints](https://github.com/maceyraejones/test-monkey/milestones) 

# User Story (Story Points = Med👕)
**As a...** dog/cat lover

**I want to...** adopt a pet

**So that...** I can have a friend 🥰

## Deployment

To deploy, we originally wanted to use all parts on Heroku. As most group encountered, Heroku's OAuth was having security issues. This made it to where you could only use the Heroku CLI to deploy. How to do that is linked [here](https://devcenter.heroku.com/articles/git#:~:text=The%20heroku%20create%20CLI%20command,remote%20for%20your%20local%20repository.). This then messed with our files so then our solution was to do the frontend deployed on Netlify while our backend was deployed on Heroku. This gave us the ability to show what the application was supposed to do.

[Frontend on Netlify](https://github.com/maceyraejones/test-monkey/milestones) 

[Backend on Heroku](https://github.com/maceyraejones/test-monkey/milestones) 

## Deploy Locally

1. Go to VSCode and go to Terminal

2. Clone Repo (using Git Bash)

` git clone https://github.com/maceyraejones/test-monkey/ ` 

3. Install [Node](https://nodejs.org/en/download/)

4. Run App (localhost:3000)

` npm run dev `

You should see this:

![cat](https://user-images.githubusercontent.com/89227313/160014356-1c8e5358-4574-47b8-8119-5d1cf320ce2b.png)



## Minimum Acceptance Criteria
- [ ] Can you deploy it locally?
- [ ] Do you see a picture of that cat above?
- [ ] Can you swipe through the images?
- [ ] Can you like the animal?
- [ ] Can you see how many likes an animal has?
