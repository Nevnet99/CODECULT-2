# Deploying 🚀

We currently have 3 branches to deploy to 
- dev
- staging 
- master

⚠️ We should be creating releases from each environment in a release branch to promote from dev -> staging -> master. ⚠️

## 1. Create a release branch  
--- 


`gcb release/0.0.1` 

(use a minor releases until we fully release to Mach.)

create a pull request in github from RELEASE_BRANCH_NAME -> dev or staging or master.