import { isEqual } from 'date-fns';
import Appointement from '../models/Appointment';

class AppointmentsRepository {
  private appointments: Appointement[];

  constructor() {
    this.appointments = [];
  }

  public findByDate(date: Date): Appointement | null {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );

    return findAppointment || null;
  }

  public create(provider: string, date: Date): Appointement {
    const appointement = new Appointement(provider, date);

    this.appointments.push(appointement);

    return appointement;
  }
}

export default AppointmentsRepository;
