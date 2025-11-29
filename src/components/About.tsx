import imgProfile from '../assets/avatar.jpg'

export function About() {
  return (
    <section className="w-full md:h-screen bg-[var(--color-background-about)] flex flex-col md:flex-row pt-16 pb-16 gap-20 md:pt-0 md:pb-0 md:gap-0">
      <div className="w-full h-full flex justify-center items-center md:w-[50%]">
        <div className="md:w-100 md:h-100 w-80 h-80 overflow-hidden rounded-full border-4 border-[var(--color-background-01)]">
          <img src={imgProfile} className=" rounded-full w-full h-full scale-120" alt="" />
        </div>
      </div>
      <div className="flex justify-center w-full md:w-[50%] font-[var(--font-sans)] md:pr-75 px-10 flex-col gap-4">
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
