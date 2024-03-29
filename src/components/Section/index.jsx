import styled from "@emotion/styled";

const SSection = styled.section`
  overflow: hidden;
  &.section--gradient{
    background: linear-gradient(180deg,#0000b4 -110.52%,hsla(0,0%,85%,0) 60.89%);
  }
  &.section--yellow{
    background: #FFFFA0;
  }
  &.section--dark-gradient{
    background: linear-gradient(180deg, #0000B4 0.5%, #000050 100%);
  }
  &.section--grey {
    background: #EEEEEE;
  }
  padding-bottom: 40px;
  padding-top: 40px;
`

const Content = styled.div`
  max-width: 1098px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 16px;
  padding-right: 16px;
  &.content--center {
    align-items: center;
  }
`

function Section(props) {
    return (
        <SSection
            className={`Section ${props.className} ${props.variant === 'gradient' ? ' section--gradient' : ''}${props.variant === 'yellow' ? ' section--yellow' : ''}${props.variant === 'darkGradient' ? ' section--dark-gradient' : ''}${props.variant === 'grey' ? ' section--grey' : ''}`}
            id={props.id}
        >
            <Content className={`Content ${props.center ? ' content--center' : ''}`}>
                {props.children}
            </Content>
        </SSection>
    );
}

export default Section;
