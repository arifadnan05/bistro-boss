
const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="mx-auto text-center my-16 w-4/12">
      <p className="text-[#D99904] mb-5">---{subHeading}---</p>
      <h3 className="text-[#151515] text-4xl uppercase border-y-4 py-4">{heading}</h3>
    </div>
  )
}

export default SectionTitle
