import imgProfile from '../assets/avatar.jpg'

export function About() {
  return (
    <section className="w-full h-screen bg-[var(--color-background-about)] flex">
      <div className="w-[50%] h-full flex justify-center items-center">
        <div className="w-100 h-100 overflow-hidden rounded-full border-4 border-[var(--color-background-01)]">
          <img src={imgProfile} className=" rounded-full w-full h-full scale-120" alt="" />
        </div>
      </div>
      <div className="flex justify-center w-[50%] font-[var(--font-sans)] pr-75 flex-col gap-4">
        <h2 className="text-5xl font-bold">Sobre Mim</h2>
        <p className="text-[18px] text-[var(--subtitle-color-font)]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vel placeat in delectus ipsam laborum
          nesciunt a aliquam similique soluta natus minus obcaecati aperiam saepe, earum corporis tempore,
          necessitatibus explicabo?
        </p>
        <p className="text-[18px] text-[var(--subtitle-color-font)]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, quaerat. Ipsam at vero ducimus iure
          sequi, perspiciatis pariatur voluptate accusamus obcaecati, natus nobis alias, fugit assumenda error? Tenetur,
          nam ea?
        </p>
        <p className="text-[18px] text-[var(--subtitle-color-font)]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, quaerat. Ipsam at vero ducimus iure
          sequi, perspiciatis pariatur voluptate accusamus obcaecati, natus nobis alias, fugit assumenda error? Tenetur,
          nam ea?
        </p>
      </div>
    </section>
  )
}
