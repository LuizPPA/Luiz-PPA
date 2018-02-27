import { Topic } from './topic.model'

export class TopicService{
  topics: Topic[] = [
    new Topic(
      'https://s3-sa-east-1.amazonaws.com/luizppa-assets/img/profile.jpg',
      'Backend Developer at Phari Solutions',
      'DEC 2016 - PRESENT',
      'I founded, together with three friends, a software development company that offers solutions to problems related to computer science. I am currently one of the chief developers of the team that today has extended its body and has administrative and financial sector.'
    ),
    new Topic(
      'https://s3-sa-east-1.amazonaws.com/luizppa-assets/img/profile.jpg',
      'Backend Developer at Phari Solutions',
      'DEC 2016 - PRESENT',
      'I founded, together with three friends, a software development company that offers solutions to problems related to computer science. I am currently one of the chief developers of the team that today has extended its body and has administrative and financial sector.'
    ),
    new Topic(
      'https://s3-sa-east-1.amazonaws.com/luizppa-assets/img/profile.jpg',
      'Backend Developer at Phari Solutions',
      'DEC 2016 - PRESENT',
      'I founded, together with three friends, a software development company that offers solutions to problems related to computer science. I am currently one of the chief developers of the team that today has extended its body and has administrative and financial sector.'
    ),
    new Topic(
      'https://s3-sa-east-1.amazonaws.com/luizppa-assets/img/profile.jpg',
      'Backend Developer at Phari Solutions',
      'DEC 2016 - PRESENT',
      'I founded, together with three friends, a software development company that offers solutions to problems related to computer science. I am currently one of the chief developers of the team that today has extended its body and has administrative and financial sector.'
    ),
    new Topic(
      'https://s3-sa-east-1.amazonaws.com/luizppa-assets/img/profile.jpg',
      'Backend Developer at Phari Solutions',
      'DEC 2016 - PRESENT',
      'I founded, together with three friends, a software development company that offers solutions to problems related to computer science. I am currently one of the chief developers of the team that today has extended its body and has administrative and financial sector.'
    )
  ]

  getTopics(){
    return this.topics.slice()
  }
}
