export class GradeSchool {
  private students: Record<number, string[]> = {}
  
  roster(): Record<number, ReadonlyArray<string>> {
    const result: Record<number, ReadonlyArray<string>> = {}

    for (const [key, gradeStudents] of Object.entries(this.students)) {
      const grade = parseInt(key)
      result[grade] = [...gradeStudents]
    }

    return result
  }

  add(name: string, grade: number) {
    const students = [...this.students[grade] || []]
    if (!students.includes(name)) {
      students.push(name)
    }
    this.students[grade] = students.sort()

    for (const [key, gradeStudents] of Object.entries(this.students)) {
      const modifyGrade = parseInt(key)
      if (modifyGrade === grade) {
        continue
      }

      const index = gradeStudents.indexOf(name)
      if (index >= 0) {
        gradeStudents.splice(index, 1)
        this.students[modifyGrade] = gradeStudents
      }
    }
  }

  grade(grade: number): ReadonlyArray<string> {
    if (!this.students[grade]) {
      return []
    }
    return [...this.students[grade]]
  }
}