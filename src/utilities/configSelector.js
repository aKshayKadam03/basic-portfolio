import config from '../config/root.config'

class ConfigSelector{
  static getProfile(){
    return config.profile
  }

  static getEducation(){
    return config.education
  }

  static getSkills(){
    return config.skills
  }

  static getExperience(){
    return config.profile
  }

  static getProjects(){
    return config.projects
  }

  static getContact(){
      return config.contact
  }

  static getFooter(){
    return config.footer
  }
}


export default ConfigSelector;