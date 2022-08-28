# Contributing to Mach Frontend 👾

Welcome to the frontend for Mach's Cast application. 


## Branches 
--- 

we have the following core branches: 

- dev - development environment expect this to not be very stable 
- staging - used for QA and a place to check before releasing to production 
- main - production should be 1:1 with staging 


before creating your own branch please 

```
git fetch --all --prune
git checkout main
git pull
```

### Naming your branch

Naming your branch should follow the below rules:

```
feature/TICKET-NO
bugfix/TICKET-NO
hotfix/TICKET-NO
chore/TICKET-NO
```

## Guidelines 
--- 

- We prefer smaller sized PRs, rather than scary "monster" PRs 👹
- "Code is being read more than it's being written" - explicit and simple code always thriumps cutting-edge, hard-to-navigate abstractions
- Going for Draft PRs and asking for feedback / opinion early on is welcomed and preferred 


## Pull Requests
--- 

<!-- TODO: ADD THE TEMPLATE TO PRs -->

We use a custom PR template so you should have some general guidance when creating a PR.

PR titles will follow the following structure 

```
[TICKET-NO] Some description
```

## Reviewing
___
### Labels

- [Feedback] for something that really must be addressed

- [Suggestion] for suggestions that can make the code better but are not impacting (aka not for bugs or so)
- [Nitpick] well for nitpicks
- [Q] for when you’re not sure about smth

🚨 Suggestions and Nitpicks are FREE to be IGNORED - in no way should you feel pressured to really do them - only Feedback is perceived as required.



### Resolving comments
It is considered best practice to let the AUTHOR of the comment to resolve it themselves - that way we know they saw whatever was in the thread and did not miss it.


 