export class Project {
  constructor(
    public name: string,
    public image :string,
    public download: string,
    public links: {url: string, destination: string}[],
    public description: string
  ){}
}
